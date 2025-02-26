
// not corret way to restrict props
// type RandomNumberProps = {
//     number: number;
//     isPositive: boolean;
//     isNegative: boolean;
//     isZero: boolean;
// }

type NumberProps = {
    number: number;
}

type PositiveNumber = NumberProps & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}

type NegativeNumber = NumberProps & {
    isPositive?: never;
    isNegative: boolean;
    isZero?: never;
}

type ZeroNumber = NumberProps & {
    isPositive?: never;
    isNegative?: never;
    isZero: boolean;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

export const RandomNumber = (props: RandomNumberProps) => {
    return (
      <div>
        <h1>Your random number is: {props.number}</h1>
      </div>
    )
}