# Define the quiz questions and answers
questions = [
    {
        "question": "What is the capital of France?",
        "choices": ["A) London", "B) Paris", "C) Madrid", "D) Rome"],
        "answer": "B"
    },
    {
        "question": "What is the largest planet in our solar system?",
        "choices": ["A) Jupiter", "B) Earth", "C) Mars", "D) Venus"],
        "answer": "A"
    },
    {
        "question": "What is the tallest mountain in the world?",
        "choices": ["A) Mount Everest", "B) Kilimanjaro", "C) Denali", "D) Mount Whitney"],
        "answer": "A"
    }
]

def take_quiz(questions):
    score = 0
    for q in questions:
        print(q["question"])
        for c in q["choices"]:
            print(c)
        answer = input("Enter your answer (A/B/C/D): ")
        if answer.upper() == q["answer"]:
            score += 1
            print("Correct!")
        else:
            print(f"Sorry, the correct answer was {q['answer']}.")
        print()
    print(f"Your final score is {score}/{len(questions)}.")

take_quiz(questions)
