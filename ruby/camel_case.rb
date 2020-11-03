# my solution
def solution(string)
  string.split(/(?=[A-Z])/).join(" ")
end

# best solution

def solution(string)
  string.gsub /([A-Z])/, ' \1'
end