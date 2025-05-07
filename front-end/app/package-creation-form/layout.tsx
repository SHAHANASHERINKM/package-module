import React from 'react';

export default function PackageCreationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* You can add a specific header for this page if needed */}
      <header>
        {/* <h1>Package Creation</h1> */}
      </header>
      <main>{children}</main>
      {/* You can add a specific footer for this page if needed */}
      <footer>
        {/* <p>Package Creation Footer</p> */}
      </footer>
    </>
  );
}