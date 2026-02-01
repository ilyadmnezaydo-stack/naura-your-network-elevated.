import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SegmentsSection } from '@/components/SegmentsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowToStartSection } from '@/components/HowToStartSection';
import { ProblemsSolutionsSection } from '@/components/ProblemsSolutionsSection';
import { SecuritySection } from '@/components/SecuritySection';
import { ObjectionsSection } from '@/components/ObjectionsSection';
import { CalculatorSection } from '@/components/CalculatorSection';
import { SignupModal } from '@/components/SignupModal';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={openModal} />
      
      <main>
        <HeroSection onOpenModal={openModal} />
        <SegmentsSection />
        <FeaturesSection />
        <HowToStartSection />
        <ProblemsSolutionsSection />
        <SecuritySection />
        <ObjectionsSection />
        <CalculatorSection onOpenModal={openModal} />
      </main>

      <Footer />
      
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
