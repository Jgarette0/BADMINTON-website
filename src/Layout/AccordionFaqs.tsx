import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFaqs() {
  return (
    <Accordion type="single" collapsible className="w-full mt-20">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Who can participate in badminton training?
        </AccordionTrigger>
        <AccordionContent>
          Our badminton training program is open to individuals above 8 years
          old and below 21 years old.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What equipment do I need to participate in the training program?
        </AccordionTrigger>
        <AccordionContent>
          Participants are required to have their badminton racket and
          appropriate sports attire and shoes for training.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What happens if I miss a session?</AccordionTrigger>
        <AccordionContent>
          If you miss a session, you can join the next available session. The
          sessions do not expire, so you can use them at your convenience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default AccordionFaqs;
