import { FormProvider, useForm } from "react-hook-form";
import Textfield from "~/components/atoms/Textfield/Textfield";

interface OrderFormInput {
  amount: number;
}

export interface OrderFormProps {
  isBuy: boolean;
}

export const OrderForm = ({ isBuy }: OrderFormProps) => {
  const methods = useForm<OrderFormInput>({ mode: "onChange", shouldFocusError: true });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onValid = (data: OrderFormInput) => {
    console.log(data);
  };

  const onInvalid = () => {
    console.log("invalid");
  };

  return (
    <FormProvider {...methods}>
      <form className="flex w-full flex-col items-start gap-2" onSubmit={handleSubmit(onValid, onInvalid)}>
        <Textfield
          {...methods.register("amount")}
          required
          className="w-full"
          error={errors.amount?.message}
          label="Amount"
          placeholder="Please enter the amount."
        />
      </form>
    </FormProvider>
  );
};
