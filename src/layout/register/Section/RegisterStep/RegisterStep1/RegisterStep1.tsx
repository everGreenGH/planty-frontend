import { Button } from "~/components/atoms/Button/Button";
import { ImageInput } from "~/components/atoms/File/ImageInput";
import Textfield from "~/components/atoms/Textfield/Textfield";

export const RegisterStep1 = () => {
  return (
    <div className="flex w-full flex-col items-start gap-4 p-6">
      <span className="mb-3 text-24/h3 text-gray-950">Enter Info</span>
      <div className="flex w-full items-center gap-6">
        <Textfield label="First Name" placeholder="e.g. Vitalik" required className="flex-1" />
        <Textfield label="Last Name" placeholder="e.g. Buterin" required className="flex-1" />
      </div>
      <Textfield label="Email" placeholder="e.g. vitalik@ethereum.org" required className="w-full" />
      <Textfield label="Organization Name" placeholder="e.g. Ethereum foundation" required className="w-full" />
      <Textfield label="Address" placeholder="e.g. 123 Main St, Anytown, USA" required className="w-full" />
      <div className="flex w-full items-center gap-6">
        <Textfield label="City" placeholder="e.g. Anytown" required className="w-full" />
        <Textfield label="State" placeholder="e.g. NY" required className="w-full" />
      </div>
      <ImageInput label="Upload Logo" onChange={() => {}} />
    </div>
  );
};
