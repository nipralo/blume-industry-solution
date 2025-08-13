import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted disclaimer
    const hasAccepted = localStorage.getItem('blume-disclaimer-accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('blume-disclaimer-accepted', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[90vh] mx-4 sm:mx-auto overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
            <div className="w-12 h-12 bg-corporate/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-corporate" />
            </div>
            <DialogTitle className="text-xl sm:text-2xl text-corporate text-center sm:text-left">
              Important Disclaimer
            </DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-4 text-corporate-gray leading-relaxed text-sm sm:text-base">
            <p>
              <strong>"Blume Space"</strong> a digital property management and communication tool and platform built by <strong>"Blume Industry Solutions LLC"</strong> is a subscription-based property management and communication tool designed to facilitate verified interactions between property investors, landlords, tenants, and licensed real estate developers. We do not engage in brokerage activities, property sales, rental transactions, or commission-based services.
            </p>
            
            <p>
              All property listings displayed on our platform are sourced from RERA-licensed entities and are required to carry valid Trakheesi permits issued by the Dubai Land Department (DLD). We do not verify ownership or permit authenticity independently and rely on our users to comply with applicable DLD and RERA regulations.
            </p>
            
            <p>
              By using this platform, you acknowledge that <strong>"Blume space"</strong> and <strong>"Blume Industry Solutions LLC"</strong> is not a real estate broker, agent, or developer, and that all transactional activities must be conducted through licensed professionals in accordance with UAE law.
            </p>
            
            <p>
              For regulatory inquiries or permit validation, please refer to the Dubai REST platform or contact the Dubai Land Department directly.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6">
          <Button 
            onClick={handleAccept}
            className="w-full bg-corporate hover:bg-corporate/90 text-corporate-light text-sm sm:text-base"
            size="lg"
          >
            <span className="block sm:hidden">I Understand & Agree</span>
            <span className="hidden sm:block">I Understand and Agree to Proceed</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;