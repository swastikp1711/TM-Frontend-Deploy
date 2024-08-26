import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const InvoiceRegistrationPage = () => {
  const [documentType, setDocumentType] = useState('invoices');
  const [invoiceTemplate, setInvoiceTemplate] = useState('PINV-Purchase invoices');
  const [relatedPurchaseOrder, setRelatedPurchaseOrder] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [suppliersInvoiceNumber, setSuppliersInvoiceNumber] = useState('');
  const [invoiceGrossValue, setInvoiceGrossValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to home page with a success message
    const grossValue = parseFloat(invoiceGrossValue);

    // Check if the invoice gross value is greater than 500
    if (grossValue > 500) {
      navigate('/home', { state: { message: 'Invoice registered successfully!' } });
    } else {
      navigate('/home', { state: { message: 'Assigned to Swastik' } });
    }
  };

  const handleCancel = () => {
    // Reset the form and navigate back to the home page without a message
    setDocumentType('invoices');
    setInvoiceTemplate('PINV-Purchase invoices');
    setRelatedPurchaseOrder('');
    setInvoiceDate('');
    setSuppliersInvoiceNumber('');
    setInvoiceGrossValue('');
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Enter the Registration Details</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
      >
        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-bold">Document Type:</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="documentType"
                value="invoices"
                checked={documentType === 'invoices'}
                onChange={() => setDocumentType('invoices')}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Invoices</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="documentType"
                value="credit notes"
                checked={documentType === 'credit notes'}
                onChange={() => setDocumentType('credit notes')}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Credit Notes</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-bold">Invoice Template:</label>
          <select
            value={invoiceTemplate}
            onChange={(e) => setInvoiceTemplate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="PINV-Purchase invoices">PINV-Purchase invoices</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-bold">Related Purchase Order:</label>
          <input
            type="text"
            value={relatedPurchaseOrder}
            onChange={(e) => setRelatedPurchaseOrder(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-bold">Invoice Date:</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-bold">Supplier's Invoice Number:</label>
          <input
            type="text"
            value={suppliersInvoiceNumber}
            onChange={(e) => setSuppliersInvoiceNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-gray-700 font-bold">Invoice Gross Value:</label>
          <input
            type="text"
            value={invoiceGrossValue}
            onChange={(e) => setInvoiceGrossValue(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceRegistrationPage;
