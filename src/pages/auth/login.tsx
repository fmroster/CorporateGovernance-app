import React from 'react'
import {
  Card,
  Input,
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Label, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, CardFooter
} from '../../components/ui'
import { Layouts } from '../../components/ui/layouts'
import { LucideMail } from 'lucide-react'

export const Login: React.FC = () => {
  return (
    <Layouts size='body'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="relative flex-col space-y-1.5">
                <LucideMail className="h-6 w-6 absolute" />
                <Input className={'pl-8'}  startIcon={<LucideMail />} label="Email address" placeholder={'email@example.com'} />
              </div>
              <Input className={'pl-8'}  startIcon={<LucideMail />} label="Email address" placeholder={'email@example.com'} type={'password'} />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </Layouts>

  )
}