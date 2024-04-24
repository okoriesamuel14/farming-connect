import React from 'react';

const UpdatePage = () => {
  return (
    <div className="update-page">
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example update card */}
            <div className="bg-white shadow-md p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Update Title</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
            {/* Add more update cards here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdatePage;
