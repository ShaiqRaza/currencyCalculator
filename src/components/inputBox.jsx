function InputBox({
    label,
    currencyKeys = {},
    changeAmount,
    changeSelectedCurrency,
    selectedCurrency="usd",
    setAmountDisability = false,
    amount=1,
}) {
   

    return (
        <div className="bg-white p-3 rounded-lg text-sm flex w-full">
            <div className="w-1/2">
                <label  className="text-orange-700 mb-2 inline-block">{label}</label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={setAmountDisability}
                    onChange={e=>{ changeAmount && changeAmount(Number(e.target.value))}}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency} 
                    disabled={false} 
                    onChange={e=>{ changeSelectedCurrency && changeSelectedCurrency(e.target.value)}}
                >
                    {
                        currencyKeys.map( key => (<option key={key} value={key}>{key}</option>) )
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;