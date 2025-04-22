import { personalInfo } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github className="h-5 w-5" />,
    Linkedin: <Linkedin className="h-5 w-5" />,
    Twitter: <Twitter className="h-5 w-5" />,
  };

  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold text-xl">Portfolio</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              {personalInfo.bio}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">リンク</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">ホーム</Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">スキル</Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">プロジェクト</Link>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">経歴</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">お問い合わせ</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">お問い合わせ</h3>
            <p className="text-muted-foreground">{personalInfo.email}</p>
            <p className="text-muted-foreground">{personalInfo.location}</p>
            <div className="flex space-x-2 pt-2">
              {personalInfo.socialLinks.map((link) => (
                <Button key={link.platform} variant="ghost" size="icon" asChild>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                    {iconMap[link.icon]}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}