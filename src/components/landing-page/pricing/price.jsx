import React from 'react';

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Pricing() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '3rem 1rem',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    border: '1px solid #e5e7eb',
  };

  const headerTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const subHeaderStyle = {
    color: '#4b5563',
  };

  const priceTagStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '1rem',
    backgroundColor: ' black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={gridContainerStyle}>
        <PlanCard 
          title="Starter" 
          price="$9/month" 
          features={['Up to 5 users', '5GB storage', 'Basic analytics', 'Email support']} 
          style={{
         ...cardStyle,
            backgroundColor: '#ffffff', // Assuming light mode, adjust for dark mode if needed
          }}
          headerTitleStyle={headerTitleStyle}
          subHeaderStyle={subHeaderStyle}
          priceTagStyle={priceTagStyle}
          listItemStyle={listItemStyle}
          buttonStyle={buttonStyle}
        />
        <PlanCard 
          title="Pro" 
          price="$29/month" 
          features={['Up to 25 users', '50GB storage', 'Advanced analytics', 'Priority email support']} 
          style={{
         ...cardStyle,
            backgroundColor: '#ffffff', // Assuming light mode, adjust for dark mode if needed
          }}
          headerTitleStyle={headerTitleStyle}
          subHeaderStyle={subHeaderStyle}
          priceTagStyle={priceTagStyle}
          listItemStyle={listItemStyle}
          buttonStyle={buttonStyle}
        />
        <PlanCard 
          title="Enterprise" 
          price="$99/month" 
          features={['Unlimited users', 'Unlimited storage', 'Custom analytics and reporting', 'Dedicated account manager']} 
          style={{
         ...cardStyle,
            backgroundColor: '#ffffff', // Assuming light mode, adjust for dark mode if needed
          }}
          headerTitleStyle={headerTitleStyle}
          subHeaderStyle={subHeaderStyle}
          priceTagStyle={priceTagStyle}
          listItemStyle={listItemStyle}
          buttonStyle={buttonStyle}
        />
      </div>
    </div>
  );
}

function PlanCard({ title, price, features, style, headerTitleStyle, subHeaderStyle, priceTagStyle, listItemStyle, buttonStyle }) {
  return (
    <div style={style}>
      <div>
        <h3 style={headerTitleStyle}>{title}</h3>
        <p style={subHeaderStyle}>Perfect for individuals and small teams.</p>
      </div>
      <div>
        <span style={priceTagStyle}>{price}</span>/month
      </div>
      <ul>
        {features.map((feature, index) => (
          <li key={index} style={listItemStyle}>
            <CheckIcon /> {feature}
          </li>
        ))}
      </ul>
      <button style={buttonStyle}>Get Started</button>
    </div>
  );
}

export default Pricing;
