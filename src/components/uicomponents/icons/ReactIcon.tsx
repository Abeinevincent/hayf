import React from "react";

const ReusableIconComponent = ({ family, name, size, color }: any) => {
  // Dynamic import of the icon component based on the family and name
  const IconComponent = React.lazy(() => import(`react-icons/${family}`));

  if (!IconComponent) {
    console.error(`Unsupported icon family or name: ${family} - ${name}`);
    return null;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IconComponent size={size || 24} color={color || "black"} />
    </React.Suspense>
  );
};

export default ReusableIconComponent;
