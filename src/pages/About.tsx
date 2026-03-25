import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <Separator className="mb-8" />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src="/images/mehat.jpg"
            alt="Patrick Coleman"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3 flex flex-col gap-6">
          <div>
            <p className="text-3xl font-bold leading-snug">
              Hi, I'm Patrick, a software engineer based out of Freiburg, Germany. 
            </p>
            <h2 className="text-xl font-semibold mb-2 mt-6">What I do</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm passionate about CI/CD, and coming from a DevOps background I always make sure to automate the deployment of any new project I start.
              Speaking of which, you can browse a few of those side projects on this site. 
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">IRL</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Away from the computer you'll find me out in nature hiking, camping and climbing, or indoors with friends running my DnD campaign.  
            </p>
          </div>
          <div>
            <a
                href="/files/Patrick Coleman - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold underline-offset-4 hover:underline"
                >
              Click here to view my resume
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}