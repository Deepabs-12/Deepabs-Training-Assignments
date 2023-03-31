#Tic Tac Toe
def print_board(board):
    print('-----------------')
    for i in range(3):
        print('|', board[i][0], '|', board[i][1], '|', board[i][2], '|')
        print('-------------')

def check_win(board, player):
    # check rows
    for i in range(3):
        if board[i][0] == player and board[i][1] == player and board[i][2] == player:
            return True
    # check columns
    for i in range(3):
        if board[0][i] == player and board[1][i] == player and board[2][i] == player:
            return True
    # check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True
    return False

def tic_tac_toe():
    board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
    players = ['X', 'O']
    turn = 0
    print_board(board)
    while True:
        player = players[turn % 2]
        print("It's", player, "'s turn.")
        row = int(input('Enter row number (0, 1, 2): '))
        col = int(input('\nEnter column number (0, 1, 2): '))

        if board[row][col] != ' ':
            print('That spot is already taken. Try again.')
            continue
        board[row][col] = player
        print_board(board)
        
        if check_win(board, player):
            print(player, 'wins!')
            break
        if turn == 8:
            print('It is a tie!')
            break
        turn += 1

tic_tac_toe()
