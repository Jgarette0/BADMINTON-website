import Footer from "@/components/Footer/Footer";
import Vortex from "@/components/ui/vortex";

function TermsPage() {
  return (
    <>
      {" "}
      <div className="flex flex-col place-items-center w-1k h- mt-20">
        <div className="text- flex flex-col justify-start place-items-start w-full py-12">
          <div className="font-semibold px-4 text-3xl md:text-5xl w-full text-left font-dahlia">
            Rules and Regulations
          </div>
          <div className="text-2xl py-20 leading-relaxed tracking-wider text-justify">
            By joining or renewing your program at the AB Badminton, you are
            accepting all the terms in this agreement.
            <br />
            <br />
            This Agreement contains all of the terms and conditions applicable
            to you while participating at the facility. If you do not agree to
            be bound by the terms and conditions of this User Agreement, please
            do not enroll in the AB Badminton. You must read, accept and sign
            all the terms and conditions contained in this User Agreement, which
            include those terms and conditions expressly set out below and those
            incorporated by reference, before you may become a member of the AB
            badminton.
            <br />
            <br />
            1. Anyone who has health problem should talk with their family
            physician to determine if they are physically fit to participate in
            the sport of badminton before entering the court.
            <br />
            <br />
            2. Members are permitted to bring guests (up to 2 guests per visit)
            to AB Badminton with the condition that the guests also accept the
            conditions listed herein, and members will the full responsibility
            and liability for their guests. Please refer to Waiver and Release
            of Liability for detail.
            <br />
            <br />
            3. All chargeable fees shall be paid prior to given access to the
            facilities.
            <br />
            <br />
            4. AB Badminton operates within a positive atmosphere of respect and
            good sportsmanship. Thus all members and guests are expected to
            exercise proper social etiquette on our premises and to respect the
            court time allowed for games and to leave your court promptly after
            the game. For”drop-in”badminton, all participants are also expected
            to exercise fair play while sharing court with others.
            <br />
            <br />
            5. All members and guests attending the AB Badminton must change
            into appropriate sporting attires and athletic footwear before
            entering the game.
            <br />
            <br />
            6. When entering in the facility, members and guests are expected to
            behave in a sensible and responsible manner. AB badminton is not
            responsible and can’t be held liable for any injury to any
            individuals, members or guests. Everyone must treat all equipment
            provided with care and respect and to make sure court is clean and
            free of obstruction before exiting the court. AB badminton reserves
            the right to deny access and eject from the premises anyone who uses
            profanity, exhibits disruptive behavior, conducts illegal activity
            and/or harassment of any form, or violates AB Badminton's terms and
            condition at the cost of that customer.
            <br />
            <br />
            7. AB Badminton should not be held responsible for any lost or
            stolen items in our facilities.
            <br />
            <br />
            8. AB Badminton Programs is non-transferable and non-refundable.
            <br />
            <br />
            9. AB Badminton may limit your actively, issue a warning, temporary
            suspend or permanently terminate your program and refuse to provide
            our services to you if: (a) you breach this Agreement; (b) we are
            unable to verify or authenticate any information you provide to us.
            <br />
            <br />
            10. AB Badminton reserves the right to make change or amend this
            Agreement without prior notice to the members.
          </div>
        </div>
      </div>
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <Footer />
      </Vortex>
    </>
  );
}
export default TermsPage;
