export default function OrgChart() {
  const orgStructure = {
    head: { name: 'Board of Directors', title: 'Governing Body', icon: '🏛️' },
    executives: [
      { name: 'Executive Director', title: 'Chief Executive Officer', icon: '👤' },
    ],
    departments: [
      {
        name: 'Programs Department',
        head: 'Director of Programs',
        icon: '📋',
        units: ['Education Unit', 'Health Unit', 'Livelihood Unit'],
      },
      {
        name: 'Finance & Admin',
        head: 'Finance Director',
        icon: '💰',
        units: ['Accounting', 'Human Resources', 'Procurement'],
      },
      {
        name: 'Operations',
        head: 'Operations Manager',
        icon: '⚙️',
        units: ['Logistics', 'IT & Systems', 'Facilities'],
      },
      {
        name: 'Monitoring & Evaluation',
        head: 'M&E Director',
        icon: '📊',
        units: ['Data Analytics', 'Impact Assessment', 'Quality Assurance'],
      },
    ],
  };

  return (
    <section id="org-chart" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Organizational Structure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our organizational structure ensures efficient operations, clear accountability, and effective service delivery.
          </p>
        </div>

        {/* Org Chart Visual */}
        <div className="flex flex-col items-center">
          {/* Board Level */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl px-8 py-5 shadow-lg text-center mb-2">
            <div className="text-2xl mb-1">{orgStructure.head.icon}</div>
            <h3 className="text-lg font-bold">{orgStructure.head.name}</h3>
            <p className="text-blue-200 text-sm">{orgStructure.head.title}</p>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-gray-300"></div>

          {/* Executive Level */}
          <div className="bg-white border-2 border-blue-200 rounded-xl px-6 py-4 shadow-md text-center mb-2">
            <div className="text-xl mb-1">{orgStructure.executives[0].icon}</div>
            <h4 className="font-bold text-gray-800">{orgStructure.executives[0].name}</h4>
            <p className="text-gray-500 text-sm">{orgStructure.executives[0].title}</p>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-gray-300"></div>

          {/* Horizontal Line */}
          <div className="w-full max-w-4xl h-0.5 bg-gray-300 relative">
            <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
            <div className="absolute top-0 left-3/4 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
          </div>

          {/* Departments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full">
            {orgStructure.departments.map((dept) => (
              <div key={dept.name} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-center mb-3">
                  <div className="text-2xl mb-2">{dept.icon}</div>
                  <h4 className="font-bold text-gray-800 text-sm">{dept.name}</h4>
                  <p className="text-blue-600 text-xs font-medium mt-1">{dept.head}</p>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <ul className="space-y-1">
                    {dept.units.map((unit) => (
                      <li key={unit} className="text-xs text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                        {unit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
