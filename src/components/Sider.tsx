import { FC, useState, useEffect, useMemo } from "react";

export const Sider: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [ipv4, setIpv4] = useState<string>("");

  const browserInfo = useMemo(() => {
    const userAgent = navigator.userAgent;
    let match;

    // Chrome
    if (userAgent.match(/chrome|chromium|crios/i)) {
      match = userAgent.match(/(?:chrome|chromium|crios)\/([\d.]+)/i);
      return { name: "Chrome", version: match ? match[1] : "" };
    }
    // Firefox
    if (userAgent.match(/firefox|fxios/i)) {
      match = userAgent.match(/(?:firefox|fxios)\/([\d.]+)/i);
      return { name: "Firefox", version: match ? match[1] : "" };
    }
    // Safari
    if (userAgent.match(/safari/i)) {
      match = userAgent.match(/version\/([\d.]+)/i);
      return { name: "Safari", version: match ? match[1] : "" };
    }
    // Opera
    if (userAgent.match(/opr\//i)) {
      match = userAgent.match(/opr\/([\d.]+)/i);
      return { name: "Opera", version: match ? match[1] : "" };
    }
    // Edge
    if (userAgent.match(/edg/i)) {
      match = userAgent.match(/edg\/([\d.]+)/i);
      return { name: "Edge", version: match ? match[1] : "" };
    }

    return { name: "Unknown Browser", version: "" };
  }, []);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpv4(data.ip))
      .catch(_error => setIpv4('Unable to fetch IP'));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 right-0 h-full">
      <div className="flex flex-col items-end justify-between h-full pr-10 py-8">
        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-end gap-2">
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">IPV4</span>
              <p className="text-[8px] text-[#C8FFD3] text-right font-semibold">{ipv4}</p>
            </div>
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">WEB_CLIENT</span>
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold"><span className="text-[6px] text-[#C8FFF480]">{browserInfo.version}</span>{' '}{browserInfo.name}</p>
            </div>
          </div>
          <div className="w-4 h-full py-2 px-1">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border border-l-0 border-dashed border-[#C8FFF480]"></div>
              <div className="absolute -top-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
              <div className="absolute -bottom-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-end gap-2">
            <div className="flex flex-col justify-end">
              <span className="text-[6px] text-[#C8FFF480] uppercase text-right">LANGUAGE</span>
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold">EN-US</p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold"><span className="text-[6px] text-[#C8FFF480]">TIMEZONE</span> {timezone}</p>
              <p className="text-[8px] text-right text-[#C8FFD3] font-semibold"><span className="text-[6px] text-[#C8FFF480]">LOCAL_TIME</span> {currentTime}</p>
            </div>
          </div>
          <div className="w-4 h-full py-2 px-1">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border border-l-0 border-dashed border-[#C8FFF480]"></div>
              <div className="absolute -top-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
              <div className="absolute -bottom-[0.5px] -left-[1px] w-[2px] h-[2px] rotate-45 bg-[#C8FFF480]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
