
import WordCloud from '@/data/word-cloud'; // Adjust the path based on your project structure
export default function WordCloudComponent() {


  return (
    <div className = "h-screen w-full bg-gradient-to-r bg-[#051A38] overflow-hidden" >
      <h1 className= "text-6xl text-[#C63B61] text-center ">Word Cloud Example</h1>
      <div className = "flex justify-center"> <WordCloud />
      </div>
    </div>
  );
}