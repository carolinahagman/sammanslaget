using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Chapter : MonoBehaviour {

	//ref for components
	[SerializeField] private Image image;
	[SerializeField] private TMP_Text textField;
	[SerializeField] private Button button;

	//ref for typing out the text.
	[SerializeField] private StoryData storyData;
	[SerializeField] private StoryManager storyManager;
	[SerializeField] private TextWriter textWriter;
	[SerializeField] private float timePerCharacter;


	private int storyIndex;

	private bool firstClick;

	void Start() {
		storyIndex = 0;

		textField.gameObject.SetActive(false);
		image.gameObject.SetActive(false);
	}

	private void Awake() {
		firstClick = true;
	}
	
	public void ShowNext() {
		if (firstClick) {
			textField.gameObject.SetActive(true);
			image.gameObject.SetActive(true);

			textWriter.RecieveText(textField, storyData.GetStoryText(storyIndex), timePerCharacter);
			textField.text = storyData.GetStoryText(storyIndex);
			storyIndex++;

			image.sprite = storyData.ActivePicture;
			firstClick = false;
			return;
		}

		if (storyIndex >= storyData.StoryLength) {
			GoToNextChapter();
			textField.gameObject.SetActive(false);
			button.gameObject.SetActive(false);
		} else {
			Debug.Log("Just about to show the story text with index: " + storyIndex);
			textField.text = storyData.GetStoryText(storyIndex);
			storyIndex++;
		}
	}

	private void GoToNextChapter() {
		storyManager.NextChapter();
	}
}