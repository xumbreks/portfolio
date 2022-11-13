import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function SocialMediaButtons() {
  return (
    <>
    <a 
    className="fixed w-[60px] h-[60px] bottom-10 right-10 bg-social-whatsapp rounded-full flex items-center justify-center z-auto animate-bounce-slow2 hover:animate-bounce-fast"
    href="https://wa.me/5562991823002" 
    target="_blank">
      <WhatsappLogo size={40}/>
    </a>
    <a 
    className="fixed w-[60px] h-[60px] bottom-10 right-[100px] bg-gradient-to-r from-social-instagram via-social-instagram1 to-social-instagram2 rounded-full flex items-center justify-center z-auto animate-bounce-slow3 hover:animate-bounce-fast"
    href="https://instagram.com/brian.rangel" 
    target="_blank">
      <InstagramLogo size={40}/>
    </a>
    <a 
    className="fixed w-[60px] h-[60px] bottom-10 right-[160px] bg-social-github rounded-full flex items-center justify-center z-auto animate-bounce-slow4 hover:animate-bounce-fast"
    href="https://github.com/xumbreks" 
    target="_blank">
      <GithubLogo size={40}/>
    </a>
    <a 
    className="fixed w-[60px] h-[60px] bottom-10 right-[220px] bg-social-linkedin rounded-full flex items-center justify-center z-auto animate-bounce-slow5 hover:animate-bounce-fast"
    href="https://linkedin.com/in/brianrangel/"
    target="_blank">
      <LinkedinLogo size={40}/>
    </a>
    </>
  );
}