import React,{ useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui';
import { Check, UserCircle, Users, FileText } from 'lucide-react';

const PerformanceMonitoring = () => {
  const [objectives, setObjectives] = useState([
    { id: 1, text: '', target: '', selfEval: '', peerEval: '', supervisorEval: '' }
  ]);
  const [status, setStatus] = useState('objectives'); // objectives, selfEval, peerEval, supervisorEval, complete
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    supervisor: '',
    reviewPeriod: ''
  });

  const handleObjectiveChange = (id, field, value) => {
    setObjectives(objectives.map(obj => 
      obj.id === id ? { ...obj, [field]: value } : obj
    ));
  };

  const addObjective = () => {
    setObjectives([...objectives, {
      id: objectives.length + 1,
      text: '',
      target: '',
      selfEval: '',
      peerEval: '',
      supervisorEval: ''
    }]);
  };

  const calculateOverallScore = (evalType) => {
    const scores = objectives
      .map(obj => parseFloat(obj[evalType]) || 0)
      .filter(score => score > 0);
    
    return scores.length ? 
      (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : 
      'N/A';
  };

  const renderEvaluationPhase = () => {
    const evalType = {
      selfEval: 'Self Evaluation',
      peerEval: 'Peer Evaluation',
      supervisorEval: 'Supervisor Evaluation'
    }[status];

    if (!evalType) return null;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">{evalType}</h3>
        {objectives.map((objective, index) => (
          <Card key={objective.id} className="p-4">
            <div className="space-y-4">
              <div>
                <p className="font-medium">Objective {index + 1}:</p>
                <p>{objective.text}</p>
                <p className="text-sm text-gray-600">Target: {objective.target}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Achievement Percentage (0-100):
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-24 p-2 border rounded"
                  value={objective[status]}
                  onChange={(e) => handleObjectiveChange(objective.id, status, e.target.value)}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Performance Evaluation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Employee:</p>
                <p>{employee.name}</p>
              </div>
              <div>
                <p className="font-medium">Position:</p>
                <p>{employee.position}</p>
              </div>
              <div>
                <p className="font-medium">Department:</p>
                <p>{employee.department}</p>
              </div>
              <div>
                <p className="font-medium">Review Period:</p>
                <p>{employee.reviewPeriod}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Overall Scores</h3>
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4">
                  <p className="text-sm text-gray-600">Self Evaluation</p>
                  <p className="text-2xl font-bold">{calculateOverallScore('selfEval')}%</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-gray-600">Peer Evaluation</p>
                  <p className="text-2xl font-bold">{calculateOverallScore('peerEval')}%</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-gray-600">Supervisor Evaluation</p>
                  <p className="text-2xl font-bold">{calculateOverallScore('supervisorEval')}%</p>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Objectives & Evaluations</h3>
              {objectives.map((objective, index) => (
                <Card key={objective.id} className="p-4">
                  <div className="space-y-2">
                    <p className="font-medium">Objective {index + 1}:</p>
                    <p>{objective.text}</p>
                    <p className="text-sm text-gray-600">Target: {objective.target}</p>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Self: {objective.selfEval}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Peer: {objective.peerEval}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Supervisor: {objective.supervisorEval}%</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Performance Monitoring System</h2>
        <div className="flex space-x-4">
          {['objectives', 'selfEval', 'peerEval', 'supervisorEval', 'complete'].map((phase, index) => (
            <div
              key={phase}
              className={`flex items-center space-x-2 ${
                status === phase ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              {index > 0 && <div className="h-px w-4 bg-current" />}
              <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                {phase === 'objectives' && <FileText size={16} />}
                {phase === 'selfEval' && <UserCircle size={16} />}
                {phase === 'peerEval' && <Users size={16} />}
                {phase === 'supervisorEval' && <UserCircle size={16} />}
                {phase === 'complete' && <Check size={16} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {status === 'objectives' && (
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Set Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="p-2 border rounded"
                  placeholder="Employee Name"
                  value={employee.name}
                  onChange={(e) => setEmployee({...employee, name: e.target.value})}
                />
                <input
                  className="p-2 border rounded"
                  placeholder="Position"
                  value={employee.position}
                  onChange={(e) => setEmployee({...employee, position: e.target.value})}
                />
                <input
                  className="p-2 border rounded"
                  placeholder="Department"
                  value={employee.department}
                  onChange={(e) => setEmployee({...employee, department: e.target.value})}
                />
                <input
                  className="p-2 border rounded"
                  placeholder="Review Period"
                  value={employee.reviewPeriod}
                  onChange={(e) => setEmployee({...employee, reviewPeriod: e.target.value})}
                />
              </div>

              {objectives.map((objective, index) => (
                <Card key={objective.id} className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Objective {index + 1}:
                      </label>
                      <textarea
                        className="w-full p-2 border rounded"
                        value={objective.text}
                        onChange={(e) => handleObjectiveChange(objective.id, 'text', e.target.value)}
                        placeholder="Enter objective description"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Target:
                      </label>
                      <input
                        className="w-full p-2 border rounded"
                        value={objective.target}
                        onChange={(e) => handleObjectiveChange(objective.id, 'target', e.target.value)}
                        placeholder="Enter target or success criteria"
                      />
                    </div>
                  </div>
                </Card>
              ))}
              
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={addObjective}
              >
                Add Objective
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {['selfEval', 'peerEval', 'supervisorEval'].includes(status) && renderEvaluationPhase()}
      {status === 'complete' && renderSummary()}

      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={() => {
            const phases = ['objectives', 'selfEval', 'peerEval', 'supervisorEval', 'complete'];
            const currentIndex = phases.indexOf(status);
            if (currentIndex > 0) {
              setStatus(phases[currentIndex - 1]);
            }
          }}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            const phases = ['objectives', 'selfEval', 'peerEval', 'supervisorEval', 'complete'];
            const currentIndex = phases.indexOf(status);
            if (currentIndex < phases.length - 1) {
              setStatus(phases[currentIndex + 1]);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitoring;
