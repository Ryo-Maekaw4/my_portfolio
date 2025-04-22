import { skills } from '@/lib/data';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, FileCode, Globe, Server, Container, Cloud, Github as Git, Workflow, Paintbrush } from 'lucide-react';

// アイコンのマッピング
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-5 w-5" />,
  FileCode: <FileCode className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Container: <Container className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  Git: <Git className="h-5 w-5" />,
  Workflow: <Workflow className="h-5 w-5" />,
  Paintbrush: <Paintbrush className="h-5 w-5" />,
};

export default function Skills() {
  // スキルをカテゴリごとに分類
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const devopsSkills = skills.filter(skill => skill.category === 'devops');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">スキルと技術</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            私が習得したさまざまな技術スタックとツールを紹介します。常に新しい技術を学び、スキルセットを拡大しています。
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="frontend">フロントエンド</TabsTrigger>
            <TabsTrigger value="backend">バックエンド</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>フロントエンド開発</CardTitle>
                <CardDescription>
                  ユーザーインターフェースとユーザー体験に関するスキル
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {iconMap[skill.icon]}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>バックエンド開発</CardTitle>
                <CardDescription>
                  サーバーサイドとデータベース関連のスキル
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {iconMap[skill.icon]}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devops" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>DevOps</CardTitle>
                <CardDescription>
                  開発運用と自動化に関するスキル
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {devopsSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {iconMap[skill.icon]}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}