def test_factorial():
    assert factorial(5) == 120
def factorial(num):
    if num == 1:
        return 1
    else:
        return num * factorial(num-1)