import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Users, 
  Briefcase, 
  Award, 
  MessageCircle, 
  Calendar,
  Star,
  ChevronRight,
  Menu,
  Bell,
  Search,
  Play,
  Download,
  Target,
  TrendingUp,
  Globe,
  Lightbulb,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  FileText,
  DollarSign,
  Video,
  PauseCircle,
  PlayCircle
} from 'lucide-react';

const LCAInternOnboardingApp = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [internProfile, setInternProfile] = useState(null);
  const [trainingProgress, setTrainingProgress] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState(new Set());

  // Training Videos Data
  const trainingVideos = [
    {
      id: 1,
      title: "Leading Change | Community Orientation",
      duration: "15 min",
      description: "Introduction to Leading Change Africa's mission and community",
      completed: false,
      category: "Orientation"
    },
    {
      id: 2,
      title: "Orientation Overview 🌍",
      duration: "12 min", 
      description: "Comprehensive overview of organizational structure and goals",
      completed: false,
      category: "Orientation"
    },
    {
      id: 3,
      title: "Orientation Overview Part Two: Development Board",
      duration: "18 min",
      description: "Understanding the development board and leadership structure",
      completed: false,
      category: "Leadership"
    },
    {
      id: 4,
      title: "Orientation Overview Part Three 🌟",
      duration: "20 min",
      description: "Program details and intern responsibilities",
      completed: false,
      category: "Programs"
    },
    {
      id: 5,
      title: "Orientation Overview Part Four 🌟",
      duration: "16 min",
      description: "Community engagement and impact strategies",
      completed: false,
      category: "Programs"
    },
    {
      id: 6,
      title: "Development Email Organization 💌",
      duration: "10 min",
      description: "Email management and communication protocols",
      completed: false,
      category: "Operations"
    },
    {
      id: 7,
      title: "Bloomerang Donor Management and Fundraising Software for Nonprofits",
      duration: "25 min",
      description: "Using Bloomerang for donor tracking and fundraising",
      completed: false,
      category: "Fundraising"
    },
    {
      id: 8,
      title: "Overview of Mailchimp",
      duration: "14 min",
      description: "Email marketing and campaign management with Mailchimp",
      completed: false,
      category: "Marketing"
    }
  ];

  // Staff Contacts
  const staffContacts = [
    {
      name: "Ousmane Kabre",
      position: "CEO",
      email: "ousmane@leadingchange-africa.org",
      phone: "(608) 622-0045",
      location: "United States",
      avatar: "OK"
    },
    {
      name: "Awa Maïga", 
      position: "Director of Operations & Engagement",
      email: "awa.maiga@leadingchange-africa.org",
      phone: "(608) 695-0834",
      location: "821 E Washington Ave",
      avatar: "AM"
    },
    {
      name: "Jessica Boadi",
      position: "Executive Assistant", 
      email: "jessica.boadi@leadingchange-africa.org",
      phone: "",
      location: "Ghana",
      avatar: "JB"
    }
  ];

  // Programs Data
  const programs = [
    {
      id: 1,
      title: "SoloQuest",
      description: "An original project led independently by interns",
      type: "Individual Project",
      deadline: "Proposal Due: July 5 | Presentation: August 9",
      color: "bg-blue-500",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Collaborative Impact Initiative (CII)",
      description: "Cross-team group project contributing to broader LCA objectives",
      type: "Group Project", 
      deadline: "Deliverable Due: July 22",
      color: "bg-green-500",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Leadership Academy",
      description: "Comprehensive leadership development program",
      type: "Core Program",
      deadline: "Ongoing",
      color: "bg-purple-500",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Post-Secondary Support",
      description: "Support for college preparation and career development",
      type: "Core Program",
      deadline: "Ongoing", 
      color: "bg-orange-500",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  // Fundraising Campaigns
  const fundraisingCampaigns = [
    {
      title: "Back to School Appeal",
      description: "Providing essential resources and support for scholastic success",
      status: "Active",
      target: "$25,000"
    },
    {
      title: "Giving Tuesday Campaign", 
      description: "Global movement supporting nonprofits like LCA",
      status: "Upcoming",
      target: "$15,000"
    },
    {
      title: "Annual Campaign",
      description: "Yearly fundraising effort for operational expenses and initiatives",
      status: "Planning",
      target: "$100,000"
    }
  ];

  const markVideoComplete = (videoId) => {
    setCompletedVideos(prev => new Set([...prev, videoId]));
  };

  const getProgressPercentage = () => {
    return Math.round((completedVideos.size / trainingVideos.length) * 100);
  };

  // Welcome Screen
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-gray-800 text-white p-6 flex flex-col">
      <div className="flex-1 flex flex-col justify-center text-center">
        <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-6 flex items-center justify-center">
          <div className="text-red-600 font-bold text-lg">LCA</div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome to Leading Change Africa</h1>
        <h2 className="text-xl mb-6 opacity-90">Intern Onboarding Portal</h2>
        <p className="text-lg opacity-80 mb-8">
          Start your journey as a Leading Change Africa intern. Complete your training, 
          connect with your team, and begin making an impact across Africa.
        </p>
        
        <div className="bg-white/10 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Your Onboarding Checklist</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Complete 8 training videos</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Review organizational structure</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Understand intern programs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Connect with your supervisor</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentScreen('profile-setup')}
        className="w-full bg-white text-red-600 py-4 rounded-xl font-semibold text-lg"
      >
        Begin Onboarding
      </button>
    </div>
  );

  // Profile Setup Screen
  const ProfileSetupScreen = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      position: '',
      startDate: '',
      supervisor: ''
    });

    const handleSubmit = () => {
      setInternProfile(formData);
      setCurrentScreen('dashboard');
    };

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Set Up Your Profile</h1>
            <p className="text-gray-600">Tell us about your role at Leading Change Africa</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="your.email@leadingchange-africa.org"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select your position</option>
                <option value="Development & Communication Aide">Development & Communication Aide</option>
                <option value="Program Coordinator">Program Coordinator</option>
                <option value="Research Intern">Research Intern</option>
                <option value="Operations Intern">Operations Intern</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Supervisor</label>
              <select
                value={formData.supervisor}
                onChange={(e) => setFormData({...formData, supervisor: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select your supervisor</option>
                <option value="Jessica Boadi">Jessica Boadi</option>
                <option value="Awa Maïga">Awa Maïga</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.position}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Complete Setup
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Welcome, {internProfile?.name?.split(' ')[0] || 'Intern'}!
            </h1>
            <p className="text-gray-600">Ready to lead change today?</p>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Training Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Training Progress</h2>
            <span className="text-sm text-gray-500">{completedVideos.size}/8 videos</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-red-600 h-3 rounded-full transition-all duration-500" 
              style={{width: `${getProgressPercentage()}%`}}
            ></div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{getProgressPercentage()}% Complete</span>
            <button 
              onClick={() => setCurrentScreen('training')}
              className="text-red-600 font-medium text-sm"
            >
              Continue Training →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setCurrentScreen('contacts')}
            className="bg-white p-4 rounded-xl shadow-sm text-left"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Team Contacts</h3>
            <p className="text-sm text-gray-600">Connect with your team</p>
          </button>
          
          <button 
            onClick={() => setCurrentScreen('programs')}
            className="bg-white p-4 rounded-xl shadow-sm text-left"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">Your Programs</h3>
            <p className="text-sm text-gray-600">SoloQuest & CII details</p>
          </button>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Deadlines</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <Calendar className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium text-gray-900">SoloQuest Proposal</p>
                <p className="text-sm text-gray-600">Due: July 5, 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">CII Deliverable</p>
                <p className="text-sm text-gray-600">Due: July 22, 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <Calendar className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">SoloQuest Presentation</p>
                <p className="text-sm text-gray-600">Due: August 9, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Updates</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium text-gray-900">Summer Program Implementation Starting</p>
              <p className="text-sm text-gray-600">Leadership Academy, Post Secondary and Accelerators programs beginning</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-gray-900">Ghana Work Trip Scheduled</p>
              <p className="text-sm text-gray-600">Executive team visiting Ghana, Mali, Burkina, Kenya in July</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );

  // Training Screen
  const TrainingScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">Training Videos</h1>
        <p className="text-gray-600">Complete all 8 videos to finish onboarding</p>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Overall Progress</h2>
            <span className="text-2xl font-bold text-red-600">{getProgressPercentage()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-red-600 h-4 rounded-full transition-all duration-500" 
              style={{width: `${getProgressPercentage()}%`}}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{completedVideos.size} of 8 videos completed</p>
        </div>

        <div className="space-y-4">
          {trainingVideos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => {
                setSelectedVideo(video);
                setCurrentScreen('video-player');
              }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  completedVideos.has(video.id) ? 'bg-green-500' : 'bg-gray-200'
                }`}>
                  {completedVideos.has(video.id) ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : (
                    <PlayCircle className="w-8 h-8 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{video.title}</h3>
                    <span className="text-sm text-gray-500">{video.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      video.category === 'Orientation' ? 'bg-blue-100 text-blue-700' :
                      video.category === 'Leadership' ? 'bg-purple-100 text-purple-700' :
                      video.category === 'Programs' ? 'bg-green-100 text-green-700' :
                      video.category === 'Operations' ? 'bg-yellow-100 text-yellow-700' :
                      video.category === 'Fundraising' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {video.category}
                    </span>
                    {completedVideos.has(video.id) && (
                      <span className="text-sm text-green-600 font-medium">Completed ✓</span>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );

  // Video Player Screen
  const VideoPlayerScreen = () => (
    <div className="min-h-screen bg-black">
      <div className="p-6 text-white">
        <button 
          onClick={() => setCurrentScreen('training')}
          className="mb-4 flex items-center text-white"
        >
          <ChevronRight className="w-5 h-5 transform rotate-180 mr-1" />
          Back to Training
        </button>
        
        <div className="bg-gray-900 rounded-xl p-8 text-center mb-6">
          <PlayCircle className="w-24 h-24 text-white mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">{selectedVideo?.title}</h1>
          <p className="text-gray-300 mb-4">{selectedVideo?.description}</p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span>{selectedVideo?.duration}</span>
            <span>•</span>
            <span>{selectedVideo?.category}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 text-black">
          <h3 className="text-lg font-bold mb-4">Video Notes</h3>
          <textarea
            placeholder="Take notes while watching the video..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none"
          />
          
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => {
                markVideoComplete(selectedVideo.id);
                setCurrentScreen('training');
              }}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              Mark as Completed
            </button>
            <button
              onClick={() => setCurrentScreen('training')}
              className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold"
            >
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Contacts Screen
  const ContactsScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">Team Contacts</h1>
        <p className="text-gray-600">Connect with Leading Change Africa staff</p>
      </div>

      <div className="p-6 space-y-4">
        {staffContacts.map((contact, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{contact.avatar}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.name}</h3>
                <p className="text-gray-600 mb-3">{contact.position}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${contact.email}`} className="text-blue-600 text-sm">
                      {contact.email}
                    </a>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a href={`tel:${contact.phone}`} className="text-blue-600 text-sm">
                        {contact.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{contact.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Office Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">821 E Washington Ave, Madison, WI</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">(608) 622-0045</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">office@leadingchange-africa.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">www.leadingchange-africa.org</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );

  // Programs Screen
  const ProgramsScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">Your Programs</h1>
        <p className="text-gray-600">SoloQuest and Collaborative Impact Initiative</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Intern Programs Overview</h2>
          <div className="space-y-4">
            {programs.slice(0, 2).map((program) => (
              <div key={program.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center text-white`}>
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {program.type}
                      </span>
                      <span className="text-xs text-red-600 font-medium">{program.deadline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">SoloQuest Details</h2>
          <div className="space-y-3">
            <p className="text-gray-700">
              An innovative initiative that allows interns to independently lead and execute projects 
              in community engagement, fund development, and operations.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Key Requirements:</h4>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Comprehensive proposal with objectives and methodology</li>
                <li>• Research target community and identify stakeholders</li>
                <li>• Create 3-5 minute presentation (Loom video)</li>
                <li>• Focus on the 5 W's: who, what, when, how, why</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Regular Check-ins</h2>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 mb-2">
              <strong>Weekly 1:1 sessions with {internProfile?.supervisor || 'your supervisor'}</strong>
            </p>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• Track progress on projects</li>
              <li>• Discuss ongoing tasks or challenges</li>
              <li>• Receive feedback and mentorship</li>
              <li>• Plan next steps for SoloQuest and CII</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Fundraising Campaigns</h2>
          <div className="space-y-3">
            {fundraisingCampaigns.map((campaign, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-700' :
                    campaign.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{campaign.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Target: {campaign.target}</span>
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>
  );

  // Bottom Navigation Component
  const BottomNavigation = ({ currentScreen, setCurrentScreen }) => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex items-center justify-around">
        <button
          onClick={() => setCurrentScreen('dashboard')}
          className={`flex flex-col items-center space-y-1 ${
            currentScreen === 'dashboard' ? 'text-red-600' : 'text-gray-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => setCurrentScreen('training')}
          className={`flex flex-col items-center space-y-1 ${
            currentScreen === 'training' || currentScreen === 'video-player' ? 'text-red-600' : 'text-gray-400'
          }`}
        >
          <Video className="w-5 h-5" />
          <span className="text-xs">Training</span>
        </button>
        <button
          onClick={() => setCurrentScreen('programs')}
          className={`flex flex-col items-center space-y-1 ${
            currentScreen === 'programs' ? 'text-red-600' : 'text-gray-400'
          }`}
        >
          <Target className="w-5 h-5" />
          <span className="text-xs">Programs</span>
        </button>
        <button
          onClick={() => setCurrentScreen('contacts')}
          className={`flex flex-col items-center space-y-1 ${
            currentScreen === 'contacts' ? 'text-red-600' : 'text-gray-400'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-xs">Contacts</span>
        </button>
      </div>
    </div>
  );

  // Main render logic
  if (currentScreen === 'welcome') {
    return <WelcomeScreen />;
  } else if (currentScreen === 'profile-setup') {
    return <ProfileSetupScreen />;
  } else if (currentScreen === 'dashboard') {
    return <DashboardScreen />;
  } else if (currentScreen === 'training') {
    return <TrainingScreen />;
  } else if (currentScreen === 'video-player') {
    return <VideoPlayerScreen />;
  } else if (currentScreen === 'contacts') {
    return <ContactsScreen />;
  } else if (currentScreen === 'programs') {
    return <ProgramsScreen />;
  }

  return <DashboardScreen />;
};

export default LCAInternOnboardingApp;