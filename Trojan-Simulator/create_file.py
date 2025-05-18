# create_file.py
def create_fake_file():
    with open("fake_file.txt", "w") as fake_file:
        fake_file.write("This is a fake file created by the Trojan simulator.")
    simulate_persistence()

def simulate_persistence():
    print("Simulating persistence...")

if __name__ == "__main__":
    create_fake_file()