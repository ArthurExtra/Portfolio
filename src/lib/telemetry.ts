/// <reference types="vite/client" />

export interface TelemetryData {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
  userAgent: string;
  timestamp: string;
  screenWidth: number;
  screenHeight: number;
}

export async function gatherVisitorTelemetry(): Promise<TelemetryData> {
  const data: TelemetryData = {
    userAgent: navigator.userAgent,
    timestamp: new Date().toLocaleTimeString("en-US", { hour12: true }),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };

  try {
    const res = await fetch("https://ipwhois.app/json/");
    if (res.ok) {
      const ipData = await res.json();
      if (ipData && ipData.success !== false) {
        data.ip = ipData.ip;
        data.city = ipData.city;
        data.region = ipData.region;
        data.country = ipData.country;
        data.org = ipData.org || ipData.isp;
        return data;
      }
    }
    throw new Error("Primary fetch fallback required");
  } catch (error) {
    try {
      const backupRes = await fetch("https://api.ipify.org?format=json");
      if (backupRes.ok) {
        const { ip } = await backupRes.json();
        data.ip = ip;
        const geoRes = await fetch(`https://ipwhois.app/json/${ip}`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          data.city = geoData.city;
          data.region = geoData.region;
          data.country = geoData.country;
          data.org = geoData.org || geoData.isp;
        }
      }
    } catch (e) {
      console.warn("Network boundaries telemetry lookup bypassed.");
    }
  }

  return data;
}

export async function transmitTelegramPayload(
  chatId: string,
  message: string,
): Promise<{ success: boolean; error?: string }> {
  const botToken = import.meta.env.ViteTeleGramBotToken;
  const targetChatId = chatId || import.meta.env.ViteTelegramChatId;

  if (!botToken || !targetChatId) {
    return {
      success: false,
      error:
        "Configuration keys missing. Please initialize local environment variables.",
    };
  }

  try {
    const escapedMessage = message.replace(/([_\[\]()~>#+\-=|{}.!])/g, "\\$1");
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: targetChatId,
          text: escapedMessage,
          parse_mode: "MarkdownV2",
        }),
      },
    );

    const data = await response.json();
    if (response.ok && data.ok) {
      return { success: true };
    } else {
      return {
        success: false,
        error:
          data.description ||
          data.error ||
          `Telegram responded with status ${response.status}`,
      };
    }
  } catch (err: any) {
    console.error("Telemetry payload routing failure:", err);
    return {
      success: false,
      error: err.message || "Network error transmitting payload",
    };
  }
}
