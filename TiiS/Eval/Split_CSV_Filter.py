from init import *
from testURL import *
data = pd.read_csv("./result/sort/filter_test_set_1.csv")
print()
for (gender), group in data.groupby(['name_url']):
     group.to_csv(f'{gender}.csv', index=False)