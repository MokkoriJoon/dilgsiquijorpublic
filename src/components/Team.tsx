export default function Team() {
  const focalPersons = [
    {
      name: 'Dr. Maria Santos',
      role: 'Executive Director',
      department: 'Leadership',
      email: 'director@ourorg.org',
      initials: 'MS',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'James Rodriguez',
      role: 'Programs Director',
      department: 'Programs',
      email: 'programs@ourorg.org',
      initials: 'JR',
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Sarah Chen',
      role: 'Finance Director',
      department: 'Finance & Admin',
      email: 'finance@ourorg.org',
      initials: 'SC',
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Michael Okafor',
      role: 'M&E Director',
      department: 'Monitoring & Evaluation',
      email: 'me@ourorg.org',
      initials: 'MO',
      color: 'from-purple-500 to-violet-600',
    },
    {
      name: 'Anna Kim',
      role: 'Education Coordinator',
      department: 'Programs',
      email: 'education@ourorg.org',
      initials: 'AK',
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: 'David Mensah',
      role: 'Community Liaison',
      department: 'Operations',
      email: 'community@ourorg.org',
      initials: 'DM',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      name: 'Lisa Thompson',
      role: 'Health Programs Lead',
      department: 'Programs',
      email: 'health@ourorg.org',
      initials: 'LT',
      color: 'from-red-500 to-rose-600',
    },
    {
      name: 'Carlos Rivera',
      role: 'IT & Systems Manager',
      department: 'Operations',
      email: 'it@ourorg.org',
      initials: 'CR',
      color: 'from-slate-500 to-gray-600',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Focal Persons</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who lead our programs and drive our mission forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focalPersons.map((person) => (
            <div
              key={person.name}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${person.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="text-white text-xl font-bold">{person.initials}</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">{person.name}</h4>
              <p className="text-blue-600 text-sm font-medium mb-1">{person.role}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full mb-3">
                {person.department}
              </span>
              <a
                href={`mailto:${person.email}`}
                className="text-xs text-gray-400 hover:text-blue-600 transition-colors break-all"
              >
                {person.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
