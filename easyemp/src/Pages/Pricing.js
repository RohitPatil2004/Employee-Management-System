import React, {useEffect} from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import PricingPlan from '../Components/PricingPlan';
import '../Styles/Pricing.css'

const Pricing = () => {
    useEffect(() => {
      document.title='Pricing'
    }, []);

  const pricingPlans = [
    {
      image: '/path/to/image1.jpg',
      title: 'One Month',
      features: [
        'Attendance',
        'Insurance',
        'Task Management',
        'Payroll',
        'Screenshot',
        'Email Reports',
        'Teams',
        'Daily Activity',
        'Dashboard',
        'Employees (admin only)',
        'Project Management (admin only)',
      ],
      price: 50,
    },
    {
      image: '/path/to/image2.jpg',
      title: 'Six Months',
      features: [
        'Attendance',
        'Insurance',
        'Task Management',
        'Payroll',
        'Screenshot',
        'Email Reports',
        'Teams',
        'Daily Activity',
        'Dashboard',
        'Employees (admin only)',
        'Project Management (admin only)',
      ],
      price: 40,
    },
    {
      image: '/path/to/image3.jpg',
      title: 'One Year',
      features: [
        'Attendance',
        'Insurance',
        'Task Management',
        'Payroll',
        'Screenshot',
        'Email Reports',
        'Teams',
        'Daily Activity',
        'Dashboard',
        'Employees (admin only)',
        'Project Management (admin only)',
      ],
      price: 35,
    },
    {
      image: '/path/to/image4.jpg',
      title: 'Custom Plan',
      features: [
        'Attendance',
        'Insurance',
        'Task Management',
        'Payroll',
        'Screenshot',
        'Email Reports',
        'Teams',
        'Daily Activity',
        'Dashboard',
        'Employees (admin only)',
        'Project Management (admin only)',
      ],
      price: 'Custom'
    },
  ];

  return (
    <>
      <NavBar activePage="pricing" />
      <div className="pricing-plans">
        {pricingPlans.map((plan, index) => (
          <PricingPlan
            key={index}
            image={plan.image}
            title={plan.title}
            features={plan.features}
            price={plan.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
