import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
};

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-16 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-lg font-medium text-muted-foreground animate-fade-in">こんにちは、私は</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground animate-fade-in-up delay-100">
                {personalInfo.title}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-fade-in-up delay-200">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
              <Button asChild size="lg" className="gap-2">
                <Link href="#projects">
                  プロジェクトを見る
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              
              {personalInfo.resumeUrl && (
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                    履歴書をダウンロード
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start pt-2 animate-fade-in-up delay-400">
              {personalInfo.socialLinks.map((link) => (
                <Button key={link.platform} variant="ghost" size="icon" asChild>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                    {iconMap[link.icon]}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-fade-in">
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">YT</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#skills" aria-label="下にスクロール">
              <ArrowDown className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}