import dayjs from "dayjs";

export const formatAddress = (rawAddress: string) => {
  return rawAddress.slice(0, 6) + "..." + rawAddress.slice(-4);
};

export const formatBigInt = (rawBalance: bigint) => {
  const rawBalanceNumber = Number(rawBalance) / 1e18;
  const parsedBalance = rawBalanceNumber > 100 ? rawBalanceNumber.toFixed(2) : rawBalanceNumber.toPrecision(4);
  return new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 18,
  }).format(Number(parsedBalance));
};

export const formatLeftTimestamp = (unixTimestamp: number) => {
  console.log("unixTimestamp: ", unixTimestamp);
  if (unixTimestamp > dayjs().add(1, "month").unix()) {
    return `${Math.abs(dayjs().diff(dayjs.unix(unixTimestamp), "month"))} month`;
  }
  if (unixTimestamp > dayjs().add(1, "week").unix()) {
    return `${Math.abs(dayjs().diff(dayjs.unix(unixTimestamp), "week"))} week`;
  }
  if (unixTimestamp > dayjs().add(1, "day").unix()) {
    return `${Math.abs(dayjs().diff(dayjs.unix(unixTimestamp), "day"))} day`;
  }
  if (unixTimestamp > dayjs().add(1, "hour").unix()) {
    return `${Math.abs(dayjs().diff(dayjs.unix(unixTimestamp), "hour"))} hour`;
  }
  return `${Math.abs(dayjs().diff(dayjs.unix(unixTimestamp), "minutes"))} minutes`;
};
