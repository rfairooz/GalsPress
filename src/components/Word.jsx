
import WordCloud from '@/data/word-cloud'; 
import Bias from './Bias';
import ProgressBar from './ProgressBar';
export default function WordCloudComponent({submittedText, biasScore, barScore}) {
  return (
    <div className = "h-screen w-full bg-gradient-to-r bg-[#051A38]" >
      <h1 className= "text-7xl text-[#C63B61] text-center pt-48  mt-10 font-bold">Results</h1>
      <div className="grid grid-cols-3 mt-20">
      <div className = "flex flex-col items-center"> <div className="text-2xl text-white">WORD CLOUD</div><WordCloud submittedText={submittedText}/>
      </div>
      <div className="flex flex-col  items-center ">
      <div className="text-2xl text-white mb-24">BIAS DETECTION</div><Bias rating={biasScore}/>
      </div>
      <div className = "flex flex-col items-center"> 
      <div className="text-2xl text-white">SENTIMENTAL ANALYSIS</div><ProgressBar value={barScore}/>
      </div>

      </div>
    </div>
  );
}