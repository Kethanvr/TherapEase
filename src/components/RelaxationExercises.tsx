"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Wind,
  Brain,
  Volume2,
  Activity,
} from "lucide-react";
import { relaxationExercises } from "@/data/relaxation";

export default function RelaxationExercises() {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getExerciseIcon = (type: string) => {
    switch (type) {
      case "breathing":
        return Wind;
      case "meditation":
        return Brain;
      case "sounds":
        return Volume2;
      case "movement":
        return Activity;
      default:
        return Brain;
    }
  };

  const getExerciseColor = (type: string) => {
    switch (type) {
      case "breathing":
        return "from-blue-500 to-cyan-500";
      case "meditation":
        return "from-purple-500 to-pink-500";
      case "sounds":
        return "from-green-500 to-teal-500";
      case "movement":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const startExercise = (exerciseId: string) => {
    setActiveExercise(exerciseId);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const stopExercise = () => {
    setActiveExercise(null);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const nextStep = () => {
    const exercise = relaxationExercises.find((ex) => ex.id === activeExercise);
    if (exercise && currentStep < exercise.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetExercise = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const activeExerciseData = relaxationExercises.find(
    (ex) => ex.id === activeExercise
  );

  if (activeExercise && activeExerciseData) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center">
          <div className="mb-6">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getExerciseColor(
                activeExerciseData.type
              )} mb-4`}
            >
              {(() => {
                const Icon = getExerciseIcon(activeExerciseData.type);
                return <Icon className="h-8 w-8 text-white" />;
              })()}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeExerciseData.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {activeExerciseData.description}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Duration: {activeExerciseData.duration}</span>
              <span>•</span>
              <span>
                Step {currentStep + 1} of{" "}
                {activeExerciseData.instructions.length}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
            <p className="text-lg text-gray-800 leading-relaxed">
              {activeExerciseData.instructions[currentStep]}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-3 bg-gradient-to-r ${getExerciseColor(
                activeExerciseData.type
              )} text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-2`}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              {isPlaying ? "Pause" : "Resume"}
            </button>

            <button
              onClick={nextStep}
              disabled={
                currentStep === activeExerciseData.instructions.length - 1
              }
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={resetExercise}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              onClick={stopExercise}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors"
            >
              End Exercise
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${getExerciseColor(
                  activeExerciseData.type
                )} transition-all duration-300`}
                style={{
                  width: `${
                    ((currentStep + 1) /
                      activeExerciseData.instructions.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Relaxation Exercises
        </h2>
        <p className="text-gray-600">
          Choose an exercise to help you relax and manage stress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relaxationExercises.map((exercise) => {
          const Icon = getExerciseIcon(exercise.type);
          return (
            <div
              key={exercise.id}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${getExerciseColor(
                    exercise.type
                  )} flex items-center justify-center`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {exercise.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {exercise.description}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-500">
                      Duration: {exercise.duration}
                    </span>
                    <span className="text-sm text-gray-500">
                      {exercise.instructions.length} steps
                    </span>
                  </div>
                  <button
                    onClick={() => startExercise(exercise.id)}
                    className={`w-full px-4 py-2 bg-gradient-to-r ${getExerciseColor(
                      exercise.type
                    )} text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}
                  >
                    <Play className="h-4 w-4" />
                    Start Exercise
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💡 Tips for Better Relaxation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Environment</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Find a quiet, comfortable space</li>
              <li>• Dim the lights or close your eyes</li>
              <li>• Use headphones for better focus</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Practice</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Practice regularly for best results</li>
              <li>• Don&apos;t worry about doing it perfectly</li>
              <li>• Be patient with yourself</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
