import random
cs_hod = "Mr. Brajesh Patel"
acc_off = "Ground Floor ,room no. G34"
course = " 1.B.tech 2.M.tech 3.MCA 4.MBA "
chairman = "Mr. Rajul Karsoliya"
director = "Mr. L.K. Patel"
principal_srit = "Dr.shailesh Gupta"

def unknown():
    response = ['could you please re-phrase that?',
                "sound about right",
                "what does that mean"][random.randrange(3)]
    return response