import { useState, useEffect } from 'react';
import Checkmark from './Checkmark';

function PaymentCodeGenerator() {
  const [paymentCode, setPaymentCode] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePaymentCode = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPaymentCode(code);
  };
    useEffect(() => {
        generatePaymentCode();
    }, []);

  const handleCopy = async () => {
    if (paymentCode) {
      try {
        await navigator.clipboard.writeText(paymentCode);
        setCopied(true);
      } catch (err) {
        console.error('Copy failed', err);
      }
    }
  };

  return (
    <div className="flex flex-col mb-20  mt-10 w-full items-center">
      <div className="flex items-center gap-5 mb-8">
        <div className="flex">
            <p>Your Payment Code：</p>
        
            <p className='font-bold'>
            {paymentCode || 'Loading'}
            </p>
        </div>

      <div className="flex gap-3">
        <button
          onClick={handleCopy}
          disabled={!paymentCode}
          className={`pl-4 pr-4 pt-2 pb-2 w-20 h-10
            ${copied ? "":"duration-150 cursor-pointer border-[1px] hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"}`}
        >
          {copied ? <Checkmark/> : 'Copy'}
        </button>
      </div>
      </div>
      <p className="hint">請於兩小時內付款，逾時訂單將自動取消。<br/>付款時，請於門市櫃台出示給工作人員。</p>
    </div>
  );
}

export default PaymentCodeGenerator;
