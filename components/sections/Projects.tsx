'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">プロジェクト</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            これまで手がけたプロジェクトをご紹介します。それぞれのプロジェクトで異なる技術を活用し、問題解決に取り組みました。
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="featured">注目プロジェクト</TabsTrigger>
            <TabsTrigger value="all">すべてのプロジェクト</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  openProject={openProject} 
                  setOpenProject={setOpenProject} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  openProject={openProject} 
                  setOpenProject={setOpenProject} 
                  compact={true}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: any;
  openProject: string | null;
  setOpenProject: (id: string | null) => void;
  compact?: boolean;
};

function ProjectCard({ project, openProject, setOpenProject, compact = false }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden group transition-all hover:shadow-md">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, compact ? 3 : 4).map((tech: string) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
          {project.technologies.length > (compact ? 3 : 4) && (
            <Badge variant="outline">+{project.technologies.length - (compact ? 3 : 4)}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">詳細を見る</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div className="relative overflow-hidden aspect-video rounded-md">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">概要</h4>
                <p>{project.longDescription || project.description}</p>
                
                <h4 className="font-semibold text-lg">使用技術</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                {project.githubUrl && (
                  <Button variant="outline" asChild className="gap-2">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      ソースコード
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="gap-2">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                      ライブデモ
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="flex gap-2 ml-auto">
          {project.githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <Globe className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}