export interface AIModel {
  id: string;
  name: string;
  fullName: string;
  role: string;
  description: string;
  capabilities: string[];
  limitations: string[];
  conversationStarters: string[];
  color: string;
}

export const aiModels: AIModel[] = [
  {
    id: "medical-chat",
    name: "MedChat",
    fullName: "avikumart/Medical_chat_model",
    role: "Chatting",
    description: "A friendly conversational AI designed for general health discussions. Perfect for casual health-related conversations and understanding basic medical concepts.",
    capabilities: [
      "General health conversations",
      "Basic medical terminology explanation",
      "Wellness tips and lifestyle guidance",
      "Answering common health questions"
    ],
    limitations: [
      "Cannot provide specific diagnoses",
      "Not suitable for emergency situations",
      "Cannot prescribe medications",
      "Limited to general health information"
    ],
    conversationStarters: [
      "What are some tips for better sleep?",
      "Can you explain what inflammation means?",
      "How can I improve my daily energy levels?",
      "What's the difference between a cold and the flu?"
    ],
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "hi-doctor",
    name: "HiDoctor",
    fullName: "sai1881/HiDoctor",
    role: "Explaining",
    description: "Specializes in explaining complex medical conditions and procedures in simple, understandable terms. Your go-to for clear medical explanations.",
    capabilities: [
      "Simplifying medical jargon",
      "Explaining procedures and treatments",
      "Breaking down test results concepts",
      "Educational health content"
    ],
    limitations: [
      "Cannot interpret your specific test results",
      "Not a replacement for doctor consultations",
      "Cannot provide personalized medical advice",
      "Educational purposes only"
    ],
    conversationStarters: [
      "Can you explain how blood pressure works?",
      "What happens during an MRI scan?",
      "How does the immune system fight infections?",
      "What does cholesterol do in the body?"
    ],
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "bio-medical-llama",
    name: "BioMed Llama",
    fullName: "ContactDoctor/Bio-Medical-Llama-3-8B",
    role: "Reasoning",
    description: "Advanced reasoning capabilities for understanding complex biomedical concepts and relationships. Ideal for deeper understanding of health topics.",
    capabilities: [
      "Complex biomedical reasoning",
      "Understanding drug interactions conceptually",
      "Explaining disease mechanisms",
      "Research-level health discussions"
    ],
    limitations: [
      "Not for clinical decision-making",
      "Cannot replace specialist consultations",
      "Theoretical knowledge only",
      "Not updated with latest research"
    ],
    conversationStarters: [
      "How do antibiotics work against bacteria?",
      "What's the relationship between stress and heart health?",
      "Can you explain how vaccines create immunity?",
      "Why do some diseases run in families?"
    ],
    color: "from-purple-400 to-violet-500"
  },
  {
    id: "doctor-gpt",
    name: "DoctorGPT",
    fullName: "RobCzikkel/DoctorGPT",
    role: "Diagnosing",
    description: "Trained to understand symptoms and provide educational information about potential health conditions. Helps you prepare for doctor visits.",
    capabilities: [
      "Symptom education and understanding",
      "General condition information",
      "Helping prepare questions for doctors",
      "Health awareness guidance"
    ],
    limitations: [
      "Cannot provide actual diagnoses",
      "Must not be used for self-diagnosis",
      "Always consult a real doctor for concerns",
      "For educational purposes only"
    ],
    conversationStarters: [
      "What might cause frequent headaches?",
      "What should I tell my doctor about my symptoms?",
      "How do doctors typically evaluate fatigue?",
      "What questions should I ask about my health concerns?"
    ],
    color: "from-rose-400 to-pink-500"
  },
  {
    id: "medicine-llm",
    name: "MedAnalyst",
    fullName: "AdaptLLM/medicine-LLM",
    role: "Analyzing",
    description: "Specialized in analyzing and synthesizing medical information from various sources. Great for understanding health topics from multiple perspectives.",
    capabilities: [
      "Synthesizing health information",
      "Comparing treatment approaches conceptually",
      "Analyzing health trends",
      "Research summary discussions"
    ],
    limitations: [
      "Cannot analyze personal health data",
      "Not for treatment decisions",
      "General information only",
      "Consult professionals for personal health"
    ],
    conversationStarters: [
      "What are different approaches to managing stress?",
      "How do traditional and modern medicine views differ on wellness?",
      "What factors typically influence heart health?",
      "How has our understanding of nutrition evolved?"
    ],
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "medical-advisor",
    name: "MedAdvisor",
    fullName: "ritvik77/Medical_Doctor_AI_LoRA-Mistral-7B-Instruct_FullModel",
    role: "Advising",
    description: "Provides educational guidance on health-related decisions and lifestyle choices. Helps you understand your options when thinking about wellness.",
    capabilities: [
      "Wellness lifestyle guidance",
      "Health decision education",
      "Preventive care information",
      "General health recommendations"
    ],
    limitations: [
      "Not personalized medical advice",
      "Cannot consider your full health history",
      "General guidance only",
      "Professional consultation recommended"
    ],
    conversationStarters: [
      "What lifestyle changes support heart health?",
      "How can I think about improving my diet?",
      "What should I consider for better mental wellness?",
      "How do people typically approach preventive health?"
    ],
    color: "from-cyan-400 to-sky-500"
  },
  {
    id: "dr-samantha",
    name: "Dr. Samantha",
    fullName: "sethuiyer/Dr_Samantha-7b",
    role: "Empathizing",
    description: "A compassionate AI focused on emotional support and understanding during health journeys. Here to listen and provide comfort during difficult times.",
    capabilities: [
      "Emotional support conversations",
      "Health anxiety understanding",
      "Compassionate listening",
      "Wellness motivation"
    ],
    limitations: [
      "Not a mental health professional",
      "Cannot provide therapy",
      "For support, not treatment",
      "Seek professional help for serious concerns"
    ],
    conversationStarters: [
      "I'm feeling anxious about my health...",
      "How do I stay positive during recovery?",
      "I'm overwhelmed by health information",
      "Can we talk about managing health stress?"
    ],
    color: "from-pink-400 to-rose-400"
  },
  {
    id: "clinical-bert",
    name: "ClinicalBERT",
    fullName: "medicalai/ClinicalBERT",
    role: "Extracting",
    description: "Excellent at extracting and organizing key information from medical texts. Helps make sense of complex medical documents and literature.",
    capabilities: [
      "Simplifying medical documents",
      "Key information extraction",
      "Medical text summarization",
      "Understanding clinical language"
    ],
    limitations: [
      "Cannot interpret your personal records",
      "General text understanding only",
      "Not for legal or clinical use",
      "Educational assistance only"
    ],
    conversationStarters: [
      "Can you explain common medical abbreviations?",
      "What do typical lab report terms mean?",
      "How do I understand medical literature?",
      "What should I know about reading health articles?"
    ],
    color: "from-slate-400 to-gray-500"
  },
  {
    id: "medgo",
    name: "MedGo",
    fullName: "OpenMedZoo/MedGo",
    role: "Deciding",
    description: "Designed to help you think through health-related decisions by providing balanced information and considerations.",
    capabilities: [
      "Decision-making frameworks",
      "Pros and cons discussions",
      "Health trade-off understanding",
      "Informed choice support"
    ],
    limitations: [
      "Cannot make decisions for you",
      "Not personalized recommendations",
      "General frameworks only",
      "Consult doctors for important decisions"
    ],
    conversationStarters: [
      "How do people weigh treatment options?",
      "What factors matter when choosing a doctor?",
      "How should I think about health priorities?",
      "What questions help with health decisions?"
    ],
    color: "from-lime-400 to-green-500"
  },
  {
    id: "biogpt",
    name: "BioGPT",
    fullName: "microsoft/BioGPT-Large",
    role: "Researching",
    description: "A research-focused AI trained on biomedical literature. Perfect for understanding scientific health topics and research concepts.",
    capabilities: [
      "Biomedical research discussions",
      "Scientific concept explanations",
      "Understanding research terminology",
      "Health science education"
    ],
    limitations: [
      "Academic information only",
      "Not clinical advice",
      "May reference older research",
      "For learning, not treatment"
    ],
    conversationStarters: [
      "What is the current understanding of gut health?",
      "How do researchers study disease prevention?",
      "Can you explain genomics in simple terms?",
      "What are emerging areas in health research?"
    ],
    color: "from-indigo-400 to-blue-500"
  }
];

export const getModelById = (id: string): AIModel | undefined => {
  return aiModels.find((model) => model.id === id);
};
