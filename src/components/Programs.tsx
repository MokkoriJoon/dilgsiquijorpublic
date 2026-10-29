export default function Programs() {
  const programs = [
    {
      icon: '📚',
      title: 'Education & Training',
      description: 'Providing quality educational programs, skills training, and capacity building workshops for community members of all ages.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Delivering health awareness campaigns, medical outreach programs, and wellness initiatives to underserved communities.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: '🌱',
      title: 'Environmental Sustainability',
      description: 'Implementing eco-friendly projects, tree planting drives, and environmental education to protect our planet for future generations.',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: '💼',
      title: 'Livelihood & Enterprise',
      description: 'Supporting entrepreneurship, microfinance programs, and job skills development to create economic opportunities.',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: '👩‍👧‍👦',
      title: 'Women & Youth Empowerment',
      description: 'Dedicated programs for women and youth development, including mentorship, leadership training, and advocacy.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: '🆘',
      title: 'Disaster Response & Relief',
      description: 'Rapid response and recovery programs for communities affected by natural disasters and emergencies.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We implement impactful programs across multiple sectors to address the most pressing needs of our communities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${program.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{program.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
              <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${program.color} rounded-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
