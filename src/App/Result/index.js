import React from "react";
import "./style.css";

const Result = ({ result }) => {
    return (
        <p className="form__result">
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