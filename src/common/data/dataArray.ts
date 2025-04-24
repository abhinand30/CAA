// import CAALogo from 'images/logo/caa-logo.svg'
// import DigitalLogo from 'images/logo/qda-logo.png';
// import qatarLogo from 'images/logo/state-qatar-logo.svg';

// const headerImageArray=[
//     {id:1,src:CAALogo,alt:'Civil Aviation Authority logo'},
//     {id:2,src:DigitalLogo,alt:'qatar digital governmanet logo'},
//     {id:3,src:qatarLogo,alt:'state qatar logo'},
// ];
const tabArray=[{id:1,tab:'Application Information'},{id: 2,tab: 'Purpose and Documents',},{id: 3, tab: 'Additional Information'},{id: 4, tab: 'Summary',}]
const formArray = [
    {
        id: 1, 
        tab: 'Application Information',

        fields: [
            { name: 'name', types: 'text', label: 'Name' },
            { name: 'email', types: 'text', label: 'Email address' },
            { name: 'city', types: 'text', label: 'City' },
            { name: 'country', types: 'select', options: ['India', 'Qatar', 'KSA', 'UAE', 'USA'], label: 'Select Country' },
            { name: 'phone', types: 'number', label: 'Mobile number' },
            { name: 'address', types: 'text', label: 'Address' },
            { name: 'pin', types: 'number', label: 'Pin' }
        ]
    },
    {
        id: 2,
         tab: 'Purpose and Documents',
        fields: [
            { name: 'purpose', types: 'select', options: ['Overfly', 'Business', 'Cargo', 'Technical', 'Medical', 'Training'],label:'Purpose',key:'purpose  ' },
            { name: 'ATSRoute', types: 'text', label: 'Complete ATS Route',refKey:'Overfly' },
            //Business
            { name: 'crewDetails', types: 'file', multiple: true, label: 'Crew Details',refKey:'Business' },
            { name: 'passengerDetails', types: 'file', multiple: true, label: 'Passenger Details',refKey:'Business' },
            { name: 'partyLetter', types: 'file', multiple: true, label: 'Copy of Receiving Party Letter',refKey:'Business' },
            { name: 'signatureCard', types: 'file',  label: 'Signature Card',refKey:'Business' },
            { name: 'transferFlight', types: 'file',  label: 'Transfer Flight confirmation',refKey:'Business' },
            { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation',refKey:'Business' },
            //Cargo
            { name: 'CR', types: 'file',  label: 'Copy of CR',refKey:'Cargo' },
            { name: 'healthCertificate', types: 'file', multiple: true, label: 'Health Certificate',refKey:'Cargo'  },
            { name: 'signatureCard', types: 'file', multiple: true, label: 'Signature Card',refKey:'Cargo'  },
            { name: 'consigneeLetter', types: 'file', multiple: true, label: 'Consignee letter',refKey:'Cargo'  },
            { name: 'airworthinessCertificate', types: 'file', multiple: true, label: 'Airworthiness Certificates',refKey:'Cargo'  },
            { name: 'airOperatorCertificate', types: 'file',  label: 'Air Operator Certificates',refKey:'Cargo'  },
            { name: 'aircraftInsuranceCertificate', types: 'file', multiple: true, label: 'Aircraft Insurance Certificates',refKey:'Cargo'  },
            { name: 'noiseCertificate', types: 'file',  label: 'Noise Certificates',refKey:'Cargo'  },
            { name: 'aircraftRegistrationCertificate', types: 'file',  label: 'Aircraft Registration Certificates',refKey:'Cargo'  },
            { name: 'airwayBill', types: 'file',  label: 'Airway Bill',refKey:'Cargo'  },
            { name: 'insuranceCertificate', types: 'file',  label: 'Insurance Certificate',refKey:'Cargo'  },
            { name: 'permit', types: 'file',  label: 'Import Permit',refKey:'Cargo'  },
            { name: 'dangerousGood', types: 'file',  label: 'Dangerous Good',refKey:'Cargo'  },
            { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation',refKey:'Cargo'  },
            //Technical
            { name: 'maintenance Confirmation', types: 'file',  label: 'Maintenance Confirmation',refKey:'Technical'  },
            { name: 'crewDetails', types: 'file',  label: 'Crew Details',refKey:'Technical' },
            { name: 'Crew Disembarkation', types: 'check', label: 'Crew Disembarkation',refKey:'Technical' },
            { name: 'hotelConfirmation', types: 'file',  label: 'Hotel Confirmation',refKey:'Technical' },//if yes Crew Disembarkation
            { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation',refKey:'Technical' },
            //Medical
            { name: 'hospitalLetter', types: 'file',  label: 'Letter from Hospital',refKey:'Medical' },
            { name: 'passengerDetails', types: 'file',  label: 'Passenger Details',refKey:'Medical' },
            { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation',refKey:'Medical' },
            //Training
            { name: 'transferFlight', types: 'file',  label: 'Complete ATS Router',refKey:'Training' },
            { name: 'Touch&GoNumber', types: 'file',  label: 'Number of Touch & Go',refKey:'Training' },
            { name: 'trainingTime', types: 'text',  label: 'Time of Training',refKey:'Training' },
            { name: 'groundHandling', types: 'text',isRequired:false, label: 'Ground Handling Confirmation',refKey:'Training' },
           
        ]
    },
    {
        id: 3, tab: 'Additional Information',
        fields: [
            { name: 'additionalDetails', types: 'textarea', label: 'Additional details',isRequired:false, },
            { name: 'additionalAttachment', types: 'file',multiple:true, label: 'Additional attachment',isRequired:false, },
        ]
    },
    {
        id: 4, tab: 'Summary',
        fields: [
            { name: 'agreement', types: 'check', label: 'Agreement' }
        ]
    }
]



export { tabArray,formArray }