#hangman game
import random

# List of words to choose from
word_list = ['purple', 'blue', 'white', 'grey', 'black']

def choose_word(word_list):
    return random.choice(word_list)

def check_guess(guess, word, correct_guesses):
    if guess in word:
        correct_guesses.add(guess)
    else:
        return False
    return True

def get_guess(incorrect_guesses):
    while True:
        guess = input("Guess a letter: ").lower()
        if not guess.isalpha() or len(guess) != 1:
            print("Invalid input, please enter a single letter.")
        elif guess in incorrect_guesses:
            print("You've already guessed that letter, try again.")
        else:
            return guess

def display_word(word, correct_guesses):
    for letter in word:
        if letter in correct_guesses:
            print(letter, end=' ')
        else:
            print('_', end=' ')
    print()

def play_hangman():
    word = choose_word(word_list).lower()
    correct_guesses = set()
    incorrect_guesses = set()

    while len(incorrect_guesses) < 6:
        display_word(word, correct_guesses)
        guess = get_guess(incorrect_guesses)
        if not check_guess(guess, word, correct_guesses):
            incorrect_guesses.add(guess)
            print("Incorrect guess!")
            print(f"You have {6-len(incorrect_guesses)} guesses left.")
        else:
            print("Correct guess!")
            if len(correct_guesses) == len(set(word)):
                print("Congratulations, you guessed the word!")
                return

    print(f"Sorry, you ran out of guesses. The word was {word}.")

play_hangman()
