import { workExperiences, education } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  GraduationCap,
  Calendar,
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">職歴と学歴</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            私のキャリアと教育の経歴をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              職歴
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border">
              {workExperiences.map((experience, index) => (
                <div key={experience.id} className="relative pl-10">
                  <div className="absolute left-0 top-1 bg-background border-4 border-primary rounded-full h-4 w-4 z-10"></div>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{experience.position}</CardTitle>
                          <CardDescription>{experience.company}</CardDescription>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : '現在'}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              学歴
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.institution}>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    {edu.description && <p>{edu.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// YYYY-MM形式の日付をYYYY年MM月に変換する関数
function formatDate(dateString: string) {
  const [year, month] = dateString.split('-');
  return `${year}年${month}月`;
}