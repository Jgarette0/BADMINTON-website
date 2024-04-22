import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function ContactPage() {
  return (
    <>
      <div className="flex flex-col place-items-center p-12">
        <Card className="flex flex-col place-items-center gap-8">
          <Button variant="outline" className="w-full h-1/4">
            Click me dadi
          </Button>
        </Card>
      </div>
    </>
  );
}
export default ContactPage;
