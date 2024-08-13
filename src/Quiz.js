import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import questions from './Questions';

const shuffleArray = array => {
  return array.sort(() => 0.5 - Math.random());
};

const Quiz = ({navigation}) => {
  const [selectedQuestions, setSelectedQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(questions).slice(0, 10);
    setSelectedQuestion(shuffled);
  }, []);

  const handleAnswer = answer => {
    if (answer === selectedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);

    const shuffled = shuffleArray(questions).slice(0, 10);
    setSelectedQuestion(shuffled);
  };

  return (
    <View style={styles.container}>
      {quizFinished ? (
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./img/2.png')}>
          <View>
            <Text style={styles.scoreText}>
              Your Score: {score}/{selectedQuestions.length}
            </Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={restartQuiz}>
              <Text style={styles.buttonText}>RESTART QUIZ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>HOME</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        selectedQuestions.length > 0 && (
          <ImageBackground
            style={styles.backgroundImage}
            source={require('./img/1.png')}>
            <View>
              <Text style={styles.questionText}>
                {selectedQuestions[currentQuestion].question}
              </Text>
              {selectedQuestions[currentQuestion].options.map(
                (option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleAnswer(option)}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ),
              )}
            </View>
          </ImageBackground>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '900',
  },
  optionButton: {
    backgroundColor: 'yellow',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  scoreText: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '900',
  },
  buttonStyle: {
    backgroundColor: 'yellow',
    padding: 10,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default Quiz;
