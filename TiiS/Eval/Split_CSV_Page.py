from init import *
from testURL import *
data = pd.read_csv("./result/page/page_test_set__1.csv")

for (gender), group in data.groupby(['name_url']):
     group.to_csv(f'{gender}.csv', index=False)
