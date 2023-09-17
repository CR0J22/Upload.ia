import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
 

  return (
   <div className='min-h-screen flex flex-col'> 
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">Upload.ia</h1>

      <div className="flex items-center gap-3">
        
        <span className="text-sm text-muted-foreground">Desenvolvido com ❤️‍🔥 por Cr0jan no NLW </span>
       
        <Separator orientation='vertical' className='h-6' />
        
        <Button variant={"outline"}>
          <Github className='w-4 h-4 mr-2'/> 
          GitHub
        </Button>

      </div>

    </div>

    <main className='flex-1 p-6 flex gap-5'>
      
      <div className='flex flex-col flex-1 gap-4'>
        
        <div className='grid grid-rows-2 gap-4 flex-1'>
          
          <Textarea 
            className='resize-none p-4 leading-relaxed'
            placeholder='Inclua o prompt para a IA...' 
          />
          <Textarea 
            className='resize-none p-4 leading-relaxed'
            placeholder='Texto gerado pela IA...' 
            readOnly
          />

        </div>

        <p className='text-sm text-muted-foreground'>
          Lembre-se: Você pode utilizar a variavel <code className='text-violet-400 '>{'{transcription}'}</code> no seu prompt para incluir a transcrição do video
        </p>

      </div>

      <aside className='w-80 space-y-3'>
        <form className='space-y-3'>
          <label 
            htmlFor='video'
            className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5'
          >
            <FileVideo className='h-4 w-4'/>
            Selecione um Video
          </label>
          <input type='file' id='video' accept='video/mp4' className='sr-only'/>

          <Separator />

          <div className='space-y-1'>
            <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
            <Textarea 
              id='transcription_prompt' 
              className='h-20 resize-none
              leading-relaxed' 
              placeholder='Inclua palavras chaves mencionadas no video separads por virgula (,)'
            />
          
          </div>

          <Button type='submit' className='w-full'>
            Carregar video 
            <Upload className='m-4 h-4 ml-2'/>
          </Button>
        </form>

        <Separator />

        <form className='space-y-6' >
        <div className='space-y-1'>

            <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione um prompt...' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Titulo do Youtube</SelectItem>
                  <SelectItem value='description'>Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>
          </div>


          <div className='space-y-2'>

            <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic'>
                Você podera customizar essa opçã oem breve
              </span>
          </div>

          <Separator />
          
          <div className='space-y-1'>
            <Slider 
              min={0}
              max={1}
              step={0.1}
            />
            <Label>Temperatura</Label>
             
              <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                Quanto maior a temperatura masi criativo é o resultado, porém tem maior as chances de erros
              </span>

          </div>

          <Separator />

          <Button className='w-full' type='submit'>
            Executar
            <Wand2  className='w-4 m-4 ml-2'/>
          </Button>
        </form>

      </aside>

    </main>
   </div>
  )
}

