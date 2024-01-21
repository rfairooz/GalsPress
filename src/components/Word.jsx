
import WordCloud from '@/data/word-cloud'; 
import Bias from './Bias';
export default function WordCloudComponent({submittedText, biasScore}) {
  return (
    <div className = "h-screen w-full bg-gradient-to-r bg-[#051A38]" >
      <h1 className= "text-7xl text-[#C63B61] text-center pt-48  mt-10 font-bold">Results</h1>
      <div className="grid grid-cols-3 mt-24">
      <div className = "flex justify-center"> <WordCloud submittedText={submittedText}/>
      </div>
      <div>
        <Bias rating={biasScore}/>
      </div>
      <div>
        <Bias rating={biasScore}/>
      </div>

      </div>
    </div>
  );
}