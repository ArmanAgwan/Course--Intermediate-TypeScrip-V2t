
                //----------Optional Chaining ?----------//

// A less hazardous tool, relative to the non-null assertion operator is optional chaining.  



type Payment = {
    id: string
    amount: number
    createdAt: Date
}
type Invoice = {
    id: string
    due: number
    payments: Payment[]
    lastPayment?: Payment
    createdAt: Date
}
type Customer = {
    id: string,
    lastInvoice?: Invoice
    invoices: Invoice[]
};
type ResponseData = {
    customers?: Customer[]
    customer?: Customer
}


/*
So, we can have one or many Customers, each of which may have one or more Invoices, 
each of which may have one or more Payments.
*/


function getLastPayment(data: ResponseData): number | undefined {
    const { customer } = data;
    if (!customer) return;

    const { lastInvoice } = customer;
    if (!lastInvoice) return;

    const { lastPayment } = lastInvoice;
    if (!lastPayment) return;

    return lastPayment.amount;
}


/*
All this, just to sort of drill down and find something if it’s there. Optional 
chaining gives us a more concise way to do this
*/


/*
function getLastPayment(data: ResponseData): number | undefined {
    return data?.customer?.lastInvoice?.lastPayment?.amount
  }
*/


/*
Behind the scenes, what’s happening here is very similar to the more lengthy version of 
this function that we wrote above. Here’s the compiled output (target: ES2017)
*/


/*

function getLastPayment(data) {
    var _a, _b, _c;
    return (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.customer) === null || _a === void 0 ? void 0 : _a.lastInvoice) === null || _b === void 0 ? void 0 : _b.lastPayment) === null || _c === void 0 ? void 0 : _c.amount;
}

*/



            //----------Nullish Coalescing ??----------//


/*

type PlayerConfig = {
    volume?: 0 | 25 | 50 | 75 | 100
}

function initializePlayer(config: PlayerConfig): void {
    const vol = typeof config.volume === 'undefined' ? 50 : config.volume
    setVolume(vol);
}


const vol = typeof config.volume === 'undefined' ? 50 : config.volume

const vol = config.volume || 50

const vol = config.volume ?? 50

*/




