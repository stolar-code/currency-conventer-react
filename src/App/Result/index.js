import React from "react";

const Result = ({ result }) => {
    return (
        <p>
            {!!result && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </p>
    )
};

export default Result;